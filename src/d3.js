import { select } from 'd3-selection';
import { range } from 'd3-array';
import { scaleLinear, scaleTime } from 'd3-scale';
import { line, curveMonotoneX, area } from 'd3-shape';
import { axisBottom, axisLeft } from 'd3-axis';

const d3 = {
    select,
    range,
    scaleLinear,
    scaleTime,
    line,
    curveMonotoneX,
    area,
    axisBottom,
    axisLeft,
};

export default d3;
