# game object

在 phaser 的游戏世界中，game object 是最小组件单元，例如：游戏世界中的一个 NPC, 一条狗，一朵花 等都可以理解为是一个 game object，在 phaser 中内置了很多基础的 game object， 比如： Sprite、Image、Text 等，虽然他们有不同的特性和使用场景，但都继承一个基类，有很多相似的属性和方法，下面介绍一下再任何 game object 都适用的用法

## 用法

### Destroy

#### 销毁 game object

```js
gameObject.destroy();
```

> 通常情况下，如果 game object 在显示列表或更新列表中，当场景被销毁时，该游戏对象将自动销毁。

#### Event

```js
gameObject.once("destroy", function (gameObject, fromScene) {}, scope);
```

**fromScene**：如果在场景关闭期间游戏对象被破坏，则为 true。当场景关闭时，所有 game object 将被销毁

### Position

game object 坐标属性

#### Get

```js
var x = gameObject.x;
var y = gameObject.y;
```

#### Set

```js
gameObject.x = 0;
gameObject.y = 0;
gameObject.setPosition(x, y);
gameObject.setX(x);
gameObject.setY(y);
```

### Set random

```js
gameObject.setRandomPosition(x, y, width, height);
```
