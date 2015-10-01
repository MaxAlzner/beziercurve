/*globals Point */

var Bezier = (function ()
{
    'use strict';
    
    return {
        mapCurve: function (origin, control0, control1, end, segments)
        {
            origin = Point.create(origin);
            control0 = Point.create(control0);
            control1 = Point.create(control1);
            end = Point.create(end);
            segments = Math.max(typeof segments === 'number' ? segments : 0, 3);
            var x0 = origin[0],
                y0 = origin[1],
                x1 = control0[0],
                y1 = control0[1],
                x2 = control1[0],
                y2 = control1[1],
                x3 = end[0],
                y3 = end[1],
                cx = (x1 - x0) * 3,
                bx = ((x2 - x1) * 3) - cx,
                ax = x3 - x0 - cx - bx,
                cy = (y1 - y0) * 3,
                by = ((y2 - y1) * 3) - cy,
                ay = y3 - y0 - cy - by,
                curve = [Point.create(origin)],
                i,
                t;
            for (i = 0; i < segments; i++)
            {
                t = (i + 1) / segments;
                curve.push(Point.create([
                    (ax * Math.pow(t, 3)) + (bx * Math.pow(t, 2)) + (cx * t) + x0,
                    (ay * Math.pow(t, 3)) + (by * Math.pow(t, 2)) + (cy * t) + y0
                    ]));
            }
            
            return curve;
        }
    };
}());