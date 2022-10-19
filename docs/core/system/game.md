# Game

## 实例化

```typescript
var config = {
  type: Phaser.AUTO,
  parent: null,
  width: 1024,
  height: 768,
  scale: {
    mode: Phaser.Scale.FIT,
    autoCenter: Phaser.Scale.CENTER_BOTH,
  },

  scene: null,
};
var game = new Phaser.Game(config);
```

## 销毁

```typescript
game.destroy();
```
