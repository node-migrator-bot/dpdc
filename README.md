# dpdc

client lib for deployd server

## Install

    [sudo] npm install dpdc -g
  
## CLI Usage

`dpdc`

    Usage: dpdc [options] [command]

    Commands:

      clone [host]
       - add a remote host and pull down all its files into a new directory
  
      pull [host]
       - pull down remote files into the current directory
  
      push [host]
       - push all local files to a remote host
  
      dev [port]
       - boot an http server to serve files of the current directory as well as proxy requests to a remote instance
  
      remote [host]
       - set the remote host
  
      config [key] [value]
       - (value is optional) get or set a config value

    Options:

      -h, --help     output usage information
      -V, --version  output the version number