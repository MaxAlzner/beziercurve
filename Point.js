
var Point = (function ()
{
    'use strict';
    
    var _type = Array;
    
    return {
        ensure: function (p) {
            return p ? [p[0] || 0, p[1] || 0] : [0, 0];
        },
        create: function (src)
        {
            var p = new _type(0, 0);
            if (src)
            {
                p[0] = src[0] || 0;
                p[1] = src[1] || 0;
            }
            
            return p;
        },
        add: function (p0, p1, dest)
        {
            if (!dest || p0 === dest)
            {
                dest = new _type(0, 0);
            }
            
            dest[0] = p0[0] + p1[0];
            dest[1] = p0[1] + p1[1];
            return dest;
        },
        subtract: function (p0, p1, dest)
        {
            if (!dest || p0 === dest)
            {
                dest = new _type(0, 0);
            }
            
            dest[0] = p0[0] - p1[0];
            dest[1] = p0[1] - p1[1];
            return dest;
        },
        negate: function (p, dest)
        {
            if (!dest)
            {
                dest = new _type(0, 0);
            }
            
            dest[0] = -p[0];
            dest[1] = -p[1];
            return dest;
        },
        scale: function (p, v, dest)
        {
            v = typeof v === 'number' && !isNaN(v) && isFinite(v) ? v : 1;
            if (!dest || p === dest)
            {
                dest = new _type(0, 0);
            }
            
            dest[0] = p[0] * v;
            dest[1] = p[1] * v;
            return dest;
        },
        dot: function (p0, p1, dest)
        {
            return ((p0[0] || 0) * (p1[0] || 0)) + ((p0[1] || 0) * (p1[1] || 0));
        },
        normalize: function (p)
        {
            return Point.scale(p, 1 / Point.length(p));
        },
        length: function (p)
        {
            var x = p[0] || 0, y = p[1] || 0;
            return Math.sqrt((x * x) + (y * y));
        },
        distance: function (p0, p1)
        {
            return Point.length(Point.subtract(p1, p0));
        },
        lerp: function (p0, p1, t)
        {
            return Point.add(Point.scale(Point.subtract(p1, p0), t), p0);
        }
    };
}());