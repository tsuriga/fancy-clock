# fancy-clock
JS animation exercise to imitate a clock at Singapore airport

## Starting notes

[Source](https://www.youtube.com/watch?v=pVIjvfAJgjI)

9 background clocks on the sides before the time display starts
8 columns for hour and minute figure each (4 per number)
Colon size: 2x 2x2 clocks
Clock size: 20px x 20px, each hand 10px
Size: 14 clocks down, 36 clocks wide
Total size of canvas: width: 36 * 20px = 720px, height: 14 * 20px = 280px


Total animation length: 20 seconds
Numbers' animation: 16 seconds
Colon animation: 13 seconds
Background clocks: 15-20 seconds

Start after page load: all clocks in reset position, start animation when the next minute begins.

Reset position = all clocks have horizontal line (hands in positions 9 and 3)
Fully animated (finished) position: time + colon + hands in the position denoting the hour

Numbers' animation:
Clocks closer to middle finish faster at 13 seconds (like is the general theme of the whole system), and sides at 16 seconds

Background clocks:
Clocks that are not needed to represent time will have their full animation play out in 15 to 20 seconds. All clocks in a column have the same speed. In the
middle clocks are the fastest, gradually getting slower towards the sides where they finish their animation as last elements of the Clock at 20 seconds in.

Colon movement: line does 180 (so hands spin from 3 to 9 and 9 to 3) and then hands set into their position.

Clock reset animation: 3-5 seconds to move the hands back into reset position, this time from sides to inwards at gradually slowing speeds so sides reset
faster.

Not all clocks move per frame so redraw only the areas that need to be refreshed

NOTE: There's a speed component that speeds up (or slows down) animations starting from center expanding outwards in all directions, almost like an acceleration
wave that bursts outwards from the middle. The speed function is something like y(t) = a - (t - b)², factoring in the distance from the centre somewhere there.
