# OBS-Image-Slider

<p align="center">Easily slide images from the top, bottom, left, or right side of the screen in OBS Studio (or any other broadcasting software)</p>

<p align="center"><i><b>
  Crash on the interwebs<br>
  <a href="https://twitter.com/CrashKoeck">Twitter</a> |
  <a href="https://twitch.tv/CrashKoeck">Twitch</a> |
  <a href="https://youtube.com/Crashkoeck">YouTube</a> |
  <a href="https://patreon.com/Crashkoeck">Patreon</a> |
  <a href="https://discord.gg/zyS2jbJ">Discord</a>
</b></i></p>

***

## Setup
- Download the latest *zip* file from <a href="https://github.com/CrashKoeck/OBS-Image-Slider/releases">this page</a>
- Extract the *zip* file on your computer
- Replace `image.png` with your image (be sure to rename your image to **image.png**)
- Set how long you want the animation to last in the `slide_duration_in_seconds.txt` file (in seconds)
- Add one of the 4 HTML files as a Browser Source in OBS Studio (or whichever broadcasting software you are using). The different file names indicate which edge the image will slide in from
  + `slide-from-bottom.html`
  + `slide-from-top.html`
  + `slide-from-left.html`
  + `slide-from-right.html`
- In the Browser Source properties (near the bottom), be sure to check `Shutdown source when not visible` and `Refresh browser source when scene becomes active`

***

## How to use
If you've done everything properly in the **Setup** section, all you have to do it turn on or off the visibility of the browser source for it to work

*NOTE: This will not work in Chrome/Firefox/etc. It is only designed to work in broadcasting software*

***

## Ways to use this
- You can have the browser source always visible on a specific scene so whenever your switch to that scene, it will automatically activate the slider
- You can set up a Stream Deck Multi-action to activate the browser source, delay for however many seconds you'd like, then deactivcate the browser source

***

## Misc. Details
- The image will automatically centre on the screen. If it slides from one of the side, it will centre vertically. If it slides in from the top or bottom, it will centre horizontally
- The image will automatically scale to never be larger than the screen size
- The animations are 100% CSS
- The image is eased in, meaning it will accelerate and decelerate to make it smoother
- With timing, the frist 25% of the duration will be sliding in and the last 25% is sliding out. So, a 4 second duration will be 1 second sliding in, 2 seconds still, 1 second sliding out

***

## Support
- Be sure to join the <a href="https://discord.gg/zyS2jbJ">CrashPad Discord</a> for direct support
