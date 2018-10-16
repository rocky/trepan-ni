# trepan-ni

A gdb-like debugger in the trepan debugger family.

![trepan-ni example](img/trepan-ni-session.gif)

This guts of this code is based on (and largely made up of) the nodejs
"node inspect" debugger. However the command-line interface is being
expanded and completely reworked.

For example, we include frame-changing _gdb_ commands like `up`,
`down`, and `frame`.

We also document better the in the help system command syntax, and
what each does. See for example `help break`. and `help syntax`.

For an Emacs interface into this debugger, see
[realgud-trepan-ni](https://github.com/realgud/realgud-trepan-ni).
This is part of the [realgud](https://github.com/realgud/realgud)
debugger interface suite.

## Setup:
```bash
$ npm install
```

## Install from NPM
```bash
$ npm install trepan-ni
```

## Run

```
Usage: trepan-ni [--inspect] <script.js>  # debugs <script.js>
       trepan-ni -p <process-id>          # debugs connecting to <pid>
       trepan-ni <host>:<port>            # debugs connecting to <host>:<port>
```

In the first form, you give a nodejs program to bug.  Option
`--inspect` causes the debugger not to stop initially, otherwise there
is a breakpoint set before the program proper is run.

In contrast to the first form, in the second form it is also presumed
that some nodejs program is already running in debug mode on the same
machine, and the process id, or "pid" for that program is _pid_.

In the the third form, like the second form, it is presumed that some
program is running in debug mode which is available by connecting via
a socket to _host_ at port _port_. This allows you to debug remotely
to a machine or device outside of the one you are debugging from,
although _host_ does not have to be a different machine.

See also the help given by `node --help`, as many of those options are
relevant and accepted.  Also note in particular the environment
variables that can be used to influence execution.


#### References

* [Debugger Documentation](https://nodejs.org/api/debugger.html)
* [EPS: `node inspect` CLI debugger](https://github.com/nodejs/node-eps/pull/42)
* [Debugger Protocol Viewer](https://chromedevtools.github.io/debugger-protocol-viewer/)
* [Command Line API](https://developers.google.com/web/tools/chrome-devtools/debug/command-line/command-line-reference?hl=en)
