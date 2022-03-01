# Simple-web-cam
Javascript library for easily (and responsively) taking photos on the web.

## Installation

#### Use NPM
``` shell
npm install simple-web-cam
```

## Usage

#### 1. Import package:

```
import camera from 'simple-web-cam';
```

#### 2. Init the camera:
``` js
await camera.init();
```

#### 3. Snap: you got three options
``` js
1. snap and download file:  await camera.snap_download(fileName);

2. snap and get file back:  const file = await camera.snap_get_file(type /*png etc'*/);

3. snap and get base64 string:  camera.snap_get_base64();
```


#### 4. style (optional)
``` js
const style = {
border:'2px solid black',
clipPath:'circle(40%)',
}
camera.set_video_style(style)
```


#### 5. Stop Webcam
``` js
camera.stop();
```

