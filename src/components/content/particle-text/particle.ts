export type EffectDirectionType = 'random' | 'top';

export class Particle {
  private effectDirection: EffectDirectionType;
  // destination: 최종적으로 파티클이 그려질 곳
  private destinationX: number;
  private destinationY: number;
  // 시작점
  private positionX: number;
  private positionY: number;
  // 원 크기
  // tuning
  private radius = Math.random() * 1.8 + 2;

  private velocityX = (Math.random() - 0.5) * 10;
  private velocityY = (Math.random() - 0.5) * 10;
  private friction = Math.random() * 0.05 + 0.93;

  private accX = 0;
  private accY = 0;

  private color: string;

  constructor(
    particle: { x: number; y: number; effectDirection?: EffectDirectionType },
    canvasSize: { width: number; height: number },
    color: string
  ) {
    const { x, y, effectDirection = 'random' } = particle;
    const { width, height } = canvasSize;

    this.effectDirection = effectDirection;
    this.destinationX = x;
    this.destinationY = y;

    this.positionX = Math.random() * width;
    this.positionY =
      this.effectDirection === 'top' ? 0 : Math.random() * height;
    this.color = color;
  }

  randomDirectionEffect(context: CanvasRenderingContext2D) {
    this.accX = (this.destinationX - this.positionX) / 1000;
    this.accY = (this.destinationY - this.positionY) / 1000;
    this.velocityX += this.accX;
    this.velocityY += this.accY;

    this.velocityX *= this.friction;
    this.velocityY *= this.friction;

    this.positionX += this.velocityX;
    this.positionY += this.velocityY;

    context.fillStyle = this.color;

    context.beginPath();
    context.arc(this.positionX, this.positionY, this.radius, 0, Math.PI * 2);
    context.fill();
  }
}
