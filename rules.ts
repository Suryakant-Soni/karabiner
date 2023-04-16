import fs from "fs";
import { KarabinerRules } from "./types";
import { createHyperSubLayers, app, open } from "./utils";

const rules: KarabinerRules[] = [
  // Define the Hyper key itself
  {
    description: "Hyper Key (⌃⌥⇧⌘)",
    manipulators: [
      {
        description: "Caps Lock -> Hyper Key",
        from: {
          key_code: "caps_lock",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: ["left_command", "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "escape",
          },
        ],
        type: "basic",
      },
      {
        description: "Slash -> Hyper Key",
        from: {
          key_code: "slash",
        },
        to: [
          {
            key_code: "left_shift",
            modifiers: [ "left_control", "left_option"],
          },
        ],
        to_if_alone: [
          {
            key_code: "slash",
          },
        ],
        type: "basic",
      },
      // {
      //   type: "basic",
      //   description: "Disable CMD + Tab to force Hyper Key usage",
      //   from: {
      //     key_code: "tab",
      //     modifiers: {
      //       mandatory: ["left_command"],
      //     },
      //   },
      //   to: [
      //     {
      //       key_code: "tab",
      //     },
      //   ],
      // },
    ],
  },
  ...createHyperSubLayers({
    // o = "Open" applications
    o: {
      g: app("Google Chrome"),
      // c: app("Cron"),
      v: app("Visual Studio Code"),
      // d: app("Discord"),
      // s: app("Slack"),
      // e: app("Superhuman"),
      // n: app("Notion"),
      t: app("iTerm"),
      // Open todo list managed via *H*ypersonic
      // h: open(
      //   "notion://notion.so/stellatehq/Max-Stoiber-CEO-90ea5326add5408f967278461f37c39b#29b31b030a5a4192b05f3883f7d47fe3"
      // ),
      // z: app("zoom.us"),
      // m: app("Muse"),
      // f: app("Figma"),
      // r: app("Telegram"),
      // // "i"Message
      // i: app("Messages"),
      // p: app("Spotify"),
      // a: app("iA Presenter"),
      w: app("WhatsApp"),
      // l: open("Linear"),
    },
    // below is for delete action 
    k:
    {
        h: {
        to: [
          {
            key_code: "delete_or_backspace",
            modifiers: ["left_option" ],
          },
        ],
      },
        g: {
        to: [
          {
            key_code: "delete_or_backspace",
            modifiers: ["left_command" ],
          },
        ],
      },
        j: {
        to: [
          {
            key_code: "delete_or_backspace",
          },
        ],
      },
},
    // s = "System"
    // s: {
    //   u: {
    //     to: [
    //       {
    //         key_code: "volume_increment",
    //       },
    //     ],
    //   },
    //   j: {
    //     to: [
    //       {
    //         key_code: "volume_decrement",
    //       },
    //     ],
    //   },
    //   i: {
    //     to: [
    //       {
    //         key_code: "display_brightness_increment",
    //       },
    //     ],
    //   },
    //   k: {
    //     to: [
    //       {
    //         key_code: "display_brightness_decrement",
    //       },
    //     ],
    //   },
    //   l: {
    //     to: [
    //       {
    //         key_code: "q",
    //         modifiers: ["right_control", "right_command"],
    //       },
    //     ],
    //   },
    //   // p: {
    //   //   to: [
    //   //     {
    //   //       key_code: "play_or_pause",
    //   //     },
    //   //   ],
    //   // },
    //   // semicolon: {
    //   //   to: [
    //   //     {
    //   //       key_code: "fastforward",
    //   //     },
    //   //   ],
    //   // },
    //   // e: {
    //   //   to: [
    //   //     {
    //   //       // Emoji picker
    //   //       key_code: "spacebar",
    //   //       modifiers: ["right_control", "right_command"],
    //   //     },
    //   //   ],
    //   // },
    //   // Turn on Elgato KeyLight
    //   // y: {
    //   //   to: [
    //   //     {
    //   //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 1, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //   //     },
    //   //   ],
    //   // },
    //   // h: {
    //   //   to: [
    //   //     {
    //   //       shell_command: `curl -H 'Content-Type: application/json' --request PUT --data '{ "numberOfLights": 1, "lights": [ { "on": 0, "brightness": 100, "temperature": 215 } ] }' http://192.168.8.84:9123/elgato/lights`,
    //   //     },
    //   //   ],
    //   // },
    // },

    // v = "moVe" which isn't "m" because we want it to be on the left hand
    // so that hjkl work like they do in vim
    v: {
      h: {
        to: [{ key_code: "left_arrow" }],
      },
      j: {
        to: [{ key_code: "down_arrow" }],
      },
      k: {
        to: [{ key_code: "up_arrow" }],
      },
      l: {
        to: [{ key_code: "right_arrow" }],
      },
      b: {
        to: [{ key_code: "left_arrow", modifiers: ["left_option"] }],
      },
      n: {
        to: [{ key_code: "right_arrow", modifiers: ["left_option"] }],
      },
      // Magicmove via homerow.app
      // m: {
      //   to: [{ key_code: "f", modifiers: ["right_control"] }],
      // },
      // // Scroll mode via homerow.app
      // s: {
      //   to: [{ key_code: "j", modifiers: ["right_control"] }],
      // },
      // d: {
      //   to: [{ key_code: "d", modifiers: ["right_shift", "right_command"] }],
      // },
    },

    // c = Musi*c* which isn't "m" because we want it to be on the left hand
    // c: {
    //   p: {
    //     to: [{ key_code: "play_or_pause" }],
    //   },
    //   n: {
    //     to: [{ key_code: "fastforward" }],
    //   },
    //   b: {
    //     to: [{ key_code: "rewind" }],
    //   },
    // },
  }),
];

fs.writeFileSync(
  "karabiner.json",
  JSON.stringify(
    {
      global: {
        show_in_menu_bar: false,
      },
      profiles: [
        {
          name: "Default",
          complex_modifications: {
            rules,
          },
        },
      ],
    },
    null,
    2
  )
);
