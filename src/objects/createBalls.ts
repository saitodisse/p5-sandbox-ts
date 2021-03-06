import _ from 'lodash'
import p5 from 'p5'
import { Ball } from './ball'
import { getCanvasWidth, getCanvasHeight } from '../utils'

export function createBalls(p: p5) {
  const balls: Ball[] = []
  const raids = _.range(25, p.min(getCanvasWidth(p) - 50, getCanvasHeight(p) - 50), 30)

  const ballsCount = raids.length
  const increment_color = 200 / ballsCount

  for (let i = 0; i < raids.length; i++) {
    const xCenter = getCanvasWidth(p) / 2
    const yCenter = getCanvasHeight(p) / 2
    const r = raids[i]

    const ball = new Ball({
      _p: p,
      position: p.createVector(xCenter, yCenter),
      raid: r,
      defaultBgColor: i * increment_color,
    })
    balls.push(ball)
  }

  return balls
}
