// Copyright 2018 Rocky Bernstein

'use strict';
/*=================================
  Debugger 'down' command
  ===================================*/
exports.Init = function(intf, repl) {

  intf.defineCommand('down', repl, {
    paused: true,
    help: `Select and print stack frame that called this one.

Usage: up [*count*]

An argument says how many frames down to go.

See also:
---------
up, frame
`,
    aliases: [],
    run: function(count = 1) {
      return intf.frame(intf.selectedFrameIndex - count);
    }
  });
};
