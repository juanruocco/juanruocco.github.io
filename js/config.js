var Config = {
  Characters: {
    tomas: {
      name: 'Tomas',
      folder: 'assets/tomas/',
      states: {
        default: 'wait',
        wait: {
          sprite_sheet: 'walk.png',
          sprite_frame_width: 500,
          sprite_frame_height: 454,
          sprite_frame_xOffset: 0,
          sprite_frame_yOffset: 0,
          frames: 1,
          frameForSecond:30
        },
        forward: {
          sprite_sheet: 'forward.png',
          sprite_frame_width: 185,
          sprite_frame_height: 512,
          sprite_frame_xOffset: 85,
          sprite_frame_yOffset: 0,
          frames:9,
          frameForSecond:20,
          distanceX:80
        },
        backward: {
          sprite_sheet: 'backward.png',
          sprite_frame_width: 185,
          sprite_frame_height: 512,
          sprite_frame_xOffset: 85,
          sprite_frame_yOffset: 0,
          frames:9,
          frameForSecond:20,
          distanceX:-80

        },
        jump: {
          sprite_sheet: 'jump.png',
          sprite_frame_width: 198,
          sprite_frame_height: 535,
          sprite_frame_xOffset: 100,
          sprite_frame_yOffset: -86,
          frames:12,
          frameForSecond:20
        },
        light_boxing: {
          sprite_sheet: 'light_boxing.png',
          sprite_frame_width: 280.3,
          sprite_frame_height: 454,
          sprite_frame_xOffset: 85,
          sprite_frame_yOffset: 0,
          frames:18,
          frameForSecond:60
        }

      },
      keyMap: {
        mapping: {
          '65': 'a',
          '83': 's',
          '68': 'd',
          '87': 'w',
          '85': 'u',
          '73': 'i',
          '74': 'j',
          '75': 'k'
        },
        move: {
          'w': 'jump',
          'a': 'back',
          'd': 'forward',
          's': 'crouch'
        },
        attack: {
          special: {
            'crouch,light_boxing': 'crouch_light_boxing'
          },
          normal: {
            'j': 'light_boxing',
            'k': 'heavy_boxing',
            'u': 'light_kick',
            'i': 'heavy_kick'
          }
        }
      }
    }
  }
}
