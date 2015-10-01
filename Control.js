/*globals Point */

var Control = (function ()
{
    'use strict';
    
    return function (pos, dir)
    {
        this.position = Point.create(pos);
        this.forward = Point.normalize(dir || [0, 1]);
        this.link = null;
        this.linkTo = function (other)
        {
            if (other instanceof Control)
            {
                this.link = other;
                this.forward = Point.negate(other.forward);
            }
        };
        this.moveTo = function (p)
        {
            this.position = Point.ensure(p);
            if (this.link)
            {
                this.link.position = this.position;
            }
        };
        this.lookAt = function (p)
        {
            p = Point.ensure(p);
            this.forward = Point.normalize(Point.subtract(p, this.position));
        };
    };
}());