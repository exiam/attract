interface IBounds {
  x: number;
  y: number;
  width: number;
  height: number;
}

enum PositionIndex {
  UNDEFINED = -1,
  TOP_LEFT,
  BOTTOM_LEFT,
  TOP_RIGHT,
  BOTTOM_RIGHT,
}

const DEFAULT_MAX_CHILDREN = 4;
const DEFAULT_MAX_DEPTH = 2;
const DEBUG_DEPTH_COLORS = ['#bbe1fa', '#3282b8', '#0f4c75', '#1b262c'];

export class QuadTree {
  public root: Node;
  public bounds!: IBounds;

  constructor(bounds: IBounds, _maxChildren?: number) {
    this.root = new Node(bounds);
  }

  public insert(bounds: IBounds, id: string) {
    this.root.insert(bounds, id);
  }

  public retrieve(bounds: IBounds) {
    return this.root.retrieve(bounds);
  }

  public findNodeById(id: string) {
    return this.root.findNodeById(id);
  }

  public render(ctx: CanvasRenderingContext2D) {
    this.root.renderBounds(ctx);
  }
}

export class Node {
  public bounds: IBounds;
  public nodes: Node[];
  public children: { [key: string]: IBounds };
  public depth: number;
  public maxDepth: number;
  public maxChildren: number;

  constructor(
    bounds: IBounds,
    depth?: number,
    maxDepth?: number,
    maxChildren?: number,
  ) {
    this.bounds = bounds;
    this.nodes = [];
    this.children = {};
    this.depth = depth || 0;
    this.maxDepth = maxDepth || DEFAULT_MAX_DEPTH;
    this.maxChildren = maxChildren || DEFAULT_MAX_CHILDREN;
  }

  public insert(bounds: IBounds, id: string) {
    if (this.nodes.length) {
      const index = this.getIndex(bounds);

      if (index !== PositionIndex.UNDEFINED) {
        this.nodes[index].insert(bounds, id);
        return;
      }
    }

    this.children[id] = bounds;

    const keys = Object.keys(this.children);
    if (keys.length > this.maxChildren && this.depth < this.maxDepth) {
      if (this.nodes.length === 0) {
        this.divide();
      }

      for (let i = 0; i < keys.length; ++i) {
        const bounds = this.children[keys[i]];
        const index = this.getIndex(bounds);

        if (index !== PositionIndex.UNDEFINED) {
          this.nodes[index].insert(bounds, keys[i]);
          delete this.children[keys[i]];
        }
      }
    }
  }

  public retrieve(bounds: IBounds) {
    const index = this.getIndex(bounds);
    let results: { [key: string]: IBounds } = { ...this.children };

    if (this.nodes.length) {
      if (index !== PositionIndex.UNDEFINED) {
        results = { ...results, ...this.nodes[index].retrieve(bounds) };
      } else {
        for (const node of this.nodes) {
          results = { ...results, ...node.retrieve(bounds) };
        }
      }
    }

    return results;
  }

  public findNodeById(id: string): Node | null {
    if (this.children[id]) {
      return this;
    }

    if (this.nodes.length > 0) {
      for (const node of this.nodes) {
        const subNode = node.findNodeById(id);
        if (subNode != null) {
          return subNode;
        }
      }
    }

    return null;
  }

  public getIndex(bounds: IBounds) {
    const middleWidth = this.bounds.x + this.bounds.width / 2;
    const middleHeight = this.bounds.y + this.bounds.height / 2;
    const left =
      bounds.x <= middleWidth && bounds.x + bounds.width <= middleWidth;
    const top =
      bounds.y <= middleHeight && bounds.y + bounds.height <= middleHeight;

    if (left) {
      if (top) {
        return PositionIndex.TOP_LEFT;
      }

      return PositionIndex.BOTTOM_LEFT;
    }

    if (bounds.x >= middleWidth) {
      if (top) {
        return PositionIndex.TOP_RIGHT;
      }

      return PositionIndex.BOTTOM_RIGHT;
    }

    // If doesn't fit
    return PositionIndex.UNDEFINED;
  }

  public divide() {
    const { x, y, width: originalWidth, height: originalHeight } = this.bounds;
    const width = originalWidth / 2;
    const height = originalHeight / 2;

    // Top-left
    this.nodes.push(
      new Node(
        { x, y, width, height },
        this.depth + 1,
        this.maxDepth,
        this.maxChildren,
      ),
    );

    // Bottom-left
    this.nodes.push(
      new Node(
        { x, y: y + height, width, height },
        this.depth + 1,
        this.maxDepth,
        this.maxChildren,
      ),
    );

    // Top-right
    this.nodes.push(
      new Node(
        { x: x + width, y, width, height },
        this.depth + 1,
        this.maxDepth,
        this.maxChildren,
      ),
    );

    // Bottom-right
    this.nodes.push(
      new Node(
        { x: x + width, y: y + height, width, height },
        this.depth + 1,
        this.maxDepth,
        this.maxChildren,
      ),
    );
  }

  public renderBounds(ctx: CanvasRenderingContext2D) {
    const { x, y, width, height } = this.bounds;

    ctx.strokeStyle =
      this.depth < DEBUG_DEPTH_COLORS.length
        ? DEBUG_DEPTH_COLORS[this.depth]
        : 'black';
    ctx.strokeRect(x, y, width, height);

    this.nodes.forEach(node => {
      node.renderBounds(ctx);
    });
  }
}
