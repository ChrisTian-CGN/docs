__NUXT_JSONP__("/articles/audio", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab,ac,ad,ae,af,ag,ah,ai){return {data:[{article:{slug:C,description:"Here is how to fix several common audio issues with your computer.\n",title:"Audio Troubleshooting",keywords:[C,"dummy output","alsa","pulseaudio","pulse audio"],facebookImage:"\u002F_nuxt\u002Fimages\u002Faudio-facebookImage.jpg",twitterImage:"\u002F_nuxt\u002Fimages\u002Faudio-twitterImage.jpg",hidden:false,section:"software-troubleshooting",tableOfContents:true,toc:[{id:D,depth:v,text:E},{id:F,depth:v,text:G},{id:H,depth:v,text:I},{id:J,depth:v,text:K},{id:L,depth:v,text:M},{id:N,depth:v,text:O},{id:P,depth:Q,text:R},{id:S,depth:Q,text:T},{id:U,depth:v,text:V}],body:{type:"root",children:[{type:a,tag:e,props:{},children:[{type:b,value:"Sound settings or packages related to the sound system can become corrupt or broken. Many times, deleting the configuration files, reinstalling the sound-related packages, and restarting the audio software can help. These commands can also help fix the "},{type:a,tag:A,props:{},children:[{type:b,value:"Sound"}]},{type:b,value:" settings showing \"Dummy Output\" as the audio output."}]},{type:b,value:c},{type:a,tag:w,props:{id:D},children:[{type:a,tag:n,props:{href:"#reset-audio-software-server",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:E}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If the system is not playing audio, first try restarting the audio daemon:"}]},{type:b,value:"\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n"},{type:a,tag:"table",props:{},children:[{type:a,tag:"thead",props:{},children:[{type:a,tag:x,props:{},children:[{type:a,tag:W,props:{align:s},children:[{type:b,value:"PulseAudio"}]},{type:a,tag:W,props:{align:s},children:[{type:b,value:"PipeWire"}]}]}]},{type:a,tag:"tbody",props:{},children:[{type:a,tag:x,props:{},children:[{type:a,tag:t,props:{align:s},children:[{type:b,value:"Ubuntu pre-22.10 and Pop!_OS pre-22.04"}]},{type:a,tag:t,props:{align:s},children:[{type:b,value:"Ubuntu 22.10+ and Pop!_OS 22.04+"}]}]},{type:a,tag:x,props:{},children:[{type:a,tag:t,props:{align:s},children:[{type:a,tag:f,props:{},children:[{type:b,value:"systemctl --user restart pulseaudio"}]}]},{type:a,tag:t,props:{align:s},children:[{type:a,tag:f,props:{},children:[{type:b,value:"systemctl --user restart wireplumber pipewire pipewire-pulse"}]}]}]},{type:a,tag:x,props:{},children:[{type:a,tag:t,props:{align:s},children:[{type:a,tag:f,props:{},children:[{type:b,value:X}]}]},{type:a,tag:t,props:{align:s},children:[{type:a,tag:f,props:{},children:[{type:b,value:X}]}]}]},{type:a,tag:x,props:{},children:[{type:a,tag:t,props:{align:s},children:[{type:a,tag:f,props:{},children:[{type:b,value:B}]}]},{type:a,tag:t,props:{align:s},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This set of commands first restarts the sound daemon and removes the user's configuration for PulseAudio. On systems still using PulseAudio as a server, it restarts the PulseAudio server, which will create new default audio configuration files."}]},{type:b,value:c},{type:a,tag:w,props:{id:F},children:[{type:a,tag:n,props:{href:"#check-the-pulseaudio-controls",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:G}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The program "},{type:a,tag:A,props:{},children:[{type:b,value:Y}]},{type:b,value:" is helpful in figuring out which program is producing audio, where that audio is being routed, what the default input\u002Foutput devices are, and what the volume levels are set to.  It can be installed using the Pop!_Shop, or with this command:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo apt install pavucontrol\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Once installed, open the "},{type:a,tag:A,props:{},children:[{type:b,value:Y}]},{type:b,value:" app in the Activities or Applications menu, or run "},{type:a,tag:f,props:{},children:[{type:b,value:"pavucontrol"}]},{type:b,value:" in a terminal."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The \"Playback\" tab will show a list of applications that are currently playing audio. The volume for each application can be individually controlled."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"Playback tab",src:"\u002Fimages\u002Faudio\u002Fpavucontrol-playback.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Similarly, the \"Recording\" tab will show a list of applications that are currently recording audio."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"Recording tab",src:"\u002Fimages\u002Faudio\u002Fpavucontrol-recording.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The \"Output Devices\" tab shows a list of output devices, and an indicator of what's being played out of each device. The green checkmark being selected indicates a device is the default output device."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"Output tab",src:"\u002Fimages\u002Faudio\u002Fpavucontrol-output.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The \"Input Devices\" tab shows a similar list for input devices."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"Input tab",src:"\u002Fimages\u002Faudio\u002Fpavucontrol-input.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Under \"Configuration,\" each sound card should be listed."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"Configuration tab",src:"\u002Fimages\u002Faudio\u002Fpavucontrol-configuration.png"},children:[]}]},{type:b,value:c},{type:a,tag:w,props:{id:H},children:[{type:a,tag:n,props:{href:"#troubleshooting-alsa",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:I}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"PulseAudio sits on top of ALSA. If PulseAudio is not seeing any input\u002Foutput devices, check what playback devices ALSA is detecting:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"aplay -l\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Or, check what recording devices ALSA is detecting:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"arecord -l\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"A device may be muted in the ALSA mixer, which will override any PulseAudio volume settings. You can open the ALSA mixer with this command:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"alsamixer\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"You can navigate between the different volume meters using the left and right arrow keys. Each meter can be adjusted using the up and down arrow keys. An \"MM\" at the bottom of a meter indicates that meter is muted. If the PulseAudio Volume Control shows that sound is playing, but you don't hear any sound, try unmuting all of the volume meters in alsamixer by pressing the "},{type:a,tag:Z,props:{},children:[{type:b,value:"M"}]},{type:b,value:" key while each meter is selected."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"alsamixer",src:"\u002Fimages\u002Faudio\u002Falsamixer-main.png"},children:[]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If your system has more than one sound card (for example, an Intel sound card and an NVIDIA sound card in switchable-graphics systems), you can switch between them by pressing F6."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:"alsamixer's sound card selection",src:"\u002Fimages\u002Faudio\u002Falsamixer-soundcard.png"},children:[]}]},{type:b,value:c},{type:a,tag:w,props:{id:J},children:[{type:a,tag:n,props:{href:"#check-if-hardware-is-detected",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:K}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If ALSA doesn't list a sound card, it may not be physically detected by the system at all. If the Linux kernel sees a sound card, it will show up in your "},{type:a,tag:f,props:{},children:[{type:b,value:"lspci"}]},{type:b,value:" output. This command will list every sound card your system detects, and show the driver being used for each one:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"lspci -v | grep -A6 Audio\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If the output from that command is blank, then your system isn't detecting any sound cards (which could indicate a hardware issue.)"}]},{type:b,value:c},{type:a,tag:w,props:{id:L},children:[{type:a,tag:n,props:{href:"#other-useful-commands",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:M}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will reinstall ALSA and some of the other core audio packages:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo apt install --reinstall alsa-base alsa-utils linux-sound-base libasound2\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will reinstall the PulseAudio packages:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo apt install --reinstall libpulse0 libpulsedsp pulseaudio pulseaudio-module-bluetooth pulseaudio-utils\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will reinstall the PipeWire packages:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo apt reinstall libpipewire-0.3-0 libpipewire-0.3-common libpipewire-0.3-modules pipewire pipewire-audio-client-libraries pipewire-bin pipewire-pulse\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will force reload the kernel sound driver modules:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo alsa force-reload\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will start PulseAudio after it's been stopped (this is not usually needed, because PulseAudio will usually restart itself when it's stopped):"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"pulseaudio --start\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"This command will check the status of PipeWire and show any errors if automatic restarts raised any errors:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"systemctl --user status pipewire\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If you would like to monitor PipeWire, run:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"pw-top\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:w,props:{id:N},children:[{type:a,tag:n,props:{href:"#configuration-tweaks",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:O}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Some particular problems may be solved by tweaks to ALSA or PulseAudio configuration. Clearing the current settings for Pipewire or PulseAudio may allow the defaults to be used again. To revert to defaults and clear any current saved settings run the following commands:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"rm -r ~\u002F.config\u002Fpulse\u002F*\nrm -r ~\u002F.local\u002Fstate\u002Fwireplumber\u002F*\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:"strong",props:{},children:[{type:b,value:"NOTE:"}]},{type:b,value:" When running those commands you may see messages similar to this: "},{type:a,tag:f,props:{},children:[{type:b,value:"rm: cannot remove '\u002Fhome\u002Fckw\u002F.config\u002Fpulse\u002F*': No such file or directory"}]},{type:b,value:" those are safe to ignore as the file simply does not exist."}]},{type:b,value:c},{type:a,tag:_,props:{id:P},children:[{type:a,tag:n,props:{href:"#audio-crackling-or-hardware-clicking",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:R}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"If you hear audio crackling (especially when you start or stop playing audio), your audio card may be going to sleep too often. This is known to happen on some versions of the "},{type:a,tag:"nuxt-link",props:{to:"\u002Farticles\u002Fserval-dac\u002F"},children:[{type:b,value:"Serval WS"}]},{type:b,value:" and some "},{type:a,tag:n,props:{href:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fissues\u002F491",rel:[$,aa,ab],target:ac},children:[{type:b,value:"Thunderbolt docks"}]},{type:b,value:"."}]},{type:b,value:c},{type:a,tag:ad,props:{id:"prevent-crackling-with-pipewirewireplumber"},children:[{type:a,tag:n,props:{href:"#prevent-crackling-with-pipewirewireplumber",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:"Prevent Crackling with PipeWire\u002FWirePlumber"}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For Pop!_OS 22.04 and newer (and other distributions using PipeWire with WirePlumber), these two commands will disable this behavior and restart PipeWire:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:y}]},{type:a,tag:d,props:{style:z},children:[{type:b,value:"'s\u002F--\\[\"session.suspend-timeout-seconds\"\\] = 5\u002F\\[\"session.suspend-timeout-seconds\"\\] = 0\u002F'"}]},{type:a,tag:d,props:{style:h},children:[{type:b,value:ae}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:af}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:ag}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:y}]},{type:a,tag:d,props:{style:z},children:[{type:b,value:"'s\u002F\\[\"session.suspend-timeout-seconds\"\\] = 0\u002F--\\[\"session.suspend-timeout-seconds\"\\] = 5\u002F'"}]},{type:a,tag:d,props:{style:h},children:[{type:b,value:ae}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:af}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:ad,props:{id:"prevent-crackling-with-pulseaudio"},children:[{type:a,tag:n,props:{href:"#prevent-crackling-with-pulseaudio",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:"Prevent Crackling with PulseAudio"}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"For older versions of Pop!_OS or distributions using PulseAudio without PipeWire, these two commands will disable this behavior and restart PulseAudio:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:y}]},{type:a,tag:d,props:{style:z},children:[{type:b,value:"'s\u002Fload-module module-suspend-on-idle\u002F#load-module module-suspend-on-idle\u002F'"}]},{type:a,tag:d,props:{style:h},children:[{type:b,value:ah}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:B}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:ag}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:y}]},{type:a,tag:d,props:{style:z},children:[{type:b,value:"'s\u002F#load-module module-suspend-on-idle\u002Fload-module module-suspend-on-idle\u002F'"}]},{type:a,tag:d,props:{style:h},children:[{type:b,value:ah}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:B}]}]},{type:b,value:c},{type:a,tag:d,props:{className:[g]},children:[]}]}]}]},{type:b,value:c},{type:a,tag:_,props:{id:S},children:[{type:a,tag:n,props:{href:"#pciinternal-sound-card-not-detected-dummy-output",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:T}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"With hardware that uses the "},{type:a,tag:f,props:{},children:[{type:b,value:"snd_hda_intel"}]},{type:b,value:" kernel module, rare "},{type:a,tag:n,props:{href:"https:\u002F\u002Fbugs.launchpad.net\u002Fubuntu\u002F+source\u002Flinux-oem-osp1\u002F+bug\u002F1864061",rel:[$,aa,ab],target:ac},children:[{type:b,value:"bugs"}]},{type:b,value:" can cause the sound card to not be detected. If you're having this issue, try running these commands to force the usage of a specific audio driver:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"echo \"options snd-hda-intel dmic_detect=0\" | sudo tee -a \u002Fetc\u002Fmodprobe.d\u002Falsa-base.conf\necho \"blacklist snd_soc_skl\" | sudo tee -a \u002Fetc\u002Fmodprobe.d\u002Fblacklist.conf\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Reboot after making the changes. If this doesn't solve the issue, undo the changes using these commands:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"sudo sed -i 's\u002Foptions snd-hda-intel dmic_detect=0\u002F\u002F' \u002Fetc\u002Fmodprobe.d\u002Falsa-base.conf\nsudo sed -i 's\u002Fblacklist snd_soc_skl\u002F\u002F' \u002Fetc\u002Fmodprobe.d\u002Fblacklist.conf\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"Then reboot again."}]},{type:b,value:c},{type:a,tag:w,props:{id:U},children:[{type:a,tag:n,props:{href:"#gather-information-for-support",ariaHidden:o,tabIndex:p},children:[{type:a,tag:d,props:{className:[q,r]},children:[]}]},{type:b,value:V}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"The "},{type:a,tag:f,props:{},children:[{type:b,value:ai}]},{type:b,value:" command will gather a number of outputs, including some of the above-listed outputs, and package them so they can be shared easily. In a terminal, run the command:"}]},{type:b,value:c},{type:a,tag:i,props:{className:[j]},children:[{type:a,tag:k,props:{className:[l],style:m},children:[{type:a,tag:f,props:{},children:[{type:a,tag:d,props:{className:[g]},children:[{type:a,tag:d,props:{style:h},children:[{type:b,value:"alsa-info\n"}]}]}]}]}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:b,value:"When the script is finished gathering information, type "},{type:a,tag:Z,props:{},children:[{type:b,value:"y"}]},{type:b,value:" and press Enter to upload your output to the ALSA website, then send the link to Support."}]},{type:b,value:c},{type:a,tag:e,props:{},children:[{type:a,tag:u,props:{alt:ai,src:"\u002Fimages\u002Faudio\u002Falsa-info.png"},children:[]}]}]},dir:"\u002F",path:"\u002Faudio",extension:".md",createdAt:"2016-10-17T23:26:47.000Z",updatedAt:"2023-03-22T16:58:33.000Z",authors:[{username:"ahoneybun",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F2ada7d88deafda4e7f4a3e8c08606e2884805afa",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F4884946?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fahoneybun"},{username:"jacobgkau",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F5735081fb4ca2d5e0fad20ce8d53c9619044a4d9",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F7199422?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fjacobgkau"},{username:"thomas-zimmerman",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F157f1cce130312c96d4f179129d7b251deafcc42",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F41023059?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fthomas-zimmerman"},{username:"storyaddict",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002Fc9848a422ea3c18962f9e13ead04a335c884b43e",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F55410594?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fstoryaddict"},{username:"btkostner",commitUrl:"https:\u002F\u002Fgithub.com\u002Fsystem76\u002Fdocs\u002Fcommit\u002F302818f89cff63c9e5a871d8cfa90767510da50d",avatarUrl:"https:\u002F\u002Favatars.githubusercontent.com\u002Fu\u002F3385679?v=4",profileUrl:"https:\u002F\u002Fgithub.com\u002Fbtkostner"}]},_img:{"/_ipx/w_320,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fcf3e37.png","/_ipx/w_640,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F75978c.png","/_ipx/w_768,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fd1a5a0.png","/_ipx/w_1024,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F5228ea.png","/_ipx/w_1280,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fb02fef.png","/_ipx/w_1536,f_png/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fe71e86.png","/_ipx/w_320,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F2542ff.webp","/_ipx/w_640,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fde1ebc.webp","/_ipx/w_768,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F8b8fb9.webp","/_ipx/w_1024,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F6e63bd.webp","/_ipx/w_1280,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002F7b90de.webp","/_ipx/w_1536,f_webp/images/audio/pavucontrol-playback.png":"\u002F_nuxt\u002Fimage\u002Fa3de05.webp","/_ipx/w_320,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002Ffc6e6e.png","/_ipx/w_640,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F302f26.png","/_ipx/w_768,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002Fbf83ac.png","/_ipx/w_1024,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F8e5d59.png","/_ipx/w_1280,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F33abcc.png","/_ipx/w_1536,f_png/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F261b7d.png","/_ipx/w_320,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F0755e2.webp","/_ipx/w_640,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002Fca29fa.webp","/_ipx/w_768,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F78a305.webp","/_ipx/w_1024,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F41e798.webp","/_ipx/w_1280,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002F48bc0c.webp","/_ipx/w_1536,f_webp/images/audio/pavucontrol-recording.png":"\u002F_nuxt\u002Fimage\u002Fd97e4b.webp","/_ipx/w_320,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002Fa6d167.png","/_ipx/w_640,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F5a8fc4.png","/_ipx/w_768,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002Fa2dca1.png","/_ipx/w_1024,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F24fd7a.png","/_ipx/w_1280,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002Fbd3660.png","/_ipx/w_1536,f_png/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F7d464a.png","/_ipx/w_320,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F1cf445.webp","/_ipx/w_640,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F923c79.webp","/_ipx/w_768,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F055016.webp","/_ipx/w_1024,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F009e61.webp","/_ipx/w_1280,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F4d5663.webp","/_ipx/w_1536,f_webp/images/audio/pavucontrol-output.png":"\u002F_nuxt\u002Fimage\u002F8e151a.webp","/_ipx/w_320,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F10a676.png","/_ipx/w_640,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F30eb89.png","/_ipx/w_768,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F709600.png","/_ipx/w_1024,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002Ff5942a.png","/_ipx/w_1280,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002Fbfbb33.png","/_ipx/w_1536,f_png/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F592b4f.png","/_ipx/w_320,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002Fe55a58.webp","/_ipx/w_640,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F3275e8.webp","/_ipx/w_768,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002Fefb2c7.webp","/_ipx/w_1024,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002Fcb76f9.webp","/_ipx/w_1280,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F7fef78.webp","/_ipx/w_1536,f_webp/images/audio/pavucontrol-input.png":"\u002F_nuxt\u002Fimage\u002F00eee5.webp","/_ipx/w_320,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F1f8359.png","/_ipx/w_640,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F9c0ea0.png","/_ipx/w_768,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F8b57d3.png","/_ipx/w_1024,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F97c996.png","/_ipx/w_1280,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002Fe433f3.png","/_ipx/w_1536,f_png/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F97751f.png","/_ipx/w_320,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F00f200.webp","/_ipx/w_640,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002Fa0ee5d.webp","/_ipx/w_768,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F90b4c8.webp","/_ipx/w_1024,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F67ea80.webp","/_ipx/w_1280,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F9109f9.webp","/_ipx/w_1536,f_webp/images/audio/pavucontrol-configuration.png":"\u002F_nuxt\u002Fimage\u002F515419.webp","/_ipx/w_320,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F8fa761.png","/_ipx/w_640,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002Fd58b18.png","/_ipx/w_768,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F14c163.png","/_ipx/w_1024,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F1fa23f.png","/_ipx/w_1280,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F527565.png","/_ipx/w_1536,f_png/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002Fa9c4be.png","/_ipx/w_320,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F7e4af2.webp","/_ipx/w_640,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F4f65d8.webp","/_ipx/w_768,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F6c8614.webp","/_ipx/w_1024,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F2bdeb1.webp","/_ipx/w_1280,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002F93e3d6.webp","/_ipx/w_1536,f_webp/images/audio/alsamixer-main.png":"\u002F_nuxt\u002Fimage\u002Fc790c3.webp","/_ipx/w_320,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F32f528.png","/_ipx/w_640,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F2f3462.png","/_ipx/w_768,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F95aaca.png","/_ipx/w_1024,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F8da790.png","/_ipx/w_1280,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F755a4d.png","/_ipx/w_1536,f_png/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002Fe0e57c.png","/_ipx/w_320,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002Ff3bbdd.webp","/_ipx/w_640,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F9fae49.webp","/_ipx/w_768,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F5c1db9.webp","/_ipx/w_1024,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002Faba886.webp","/_ipx/w_1280,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F87307a.webp","/_ipx/w_1536,f_webp/images/audio/alsamixer-soundcard.png":"\u002F_nuxt\u002Fimage\u002F03f1ad.webp","/_ipx/w_320,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Fc1e99f.png","/_ipx/w_640,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Fea32d7.png","/_ipx/w_768,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F5f407d.png","/_ipx/w_1024,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F6c9723.png","/_ipx/w_1280,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Ff5e417.png","/_ipx/w_1536,f_png/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Fb6cc1c.png","/_ipx/w_320,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F18f1cb.webp","/_ipx/w_640,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F8e5de2.webp","/_ipx/w_768,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F751dec.webp","/_ipx/w_1024,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Facd1a1.webp","/_ipx/w_1280,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002Fbbe310.webp","/_ipx/w_1536,f_webp/images/audio/alsa-info.png":"\u002F_nuxt\u002Fimage\u002F87c0db.webp"}}],fetch:{},mutations:void 0}}("element","text","\n","span","p","code","line","color: var(--code-0F)","div","nuxt-content-highlight","pre","shiki","background-color: var(--code-00)","a","true",-1,"icon","icon-link","left","td","nuxt-picture",2,"h2","tr","sudo sed -i ","color: var(--code-0E)","u","pulseaudio -k","audio","reset-audio-software-server","Reset Audio Software (server)","check-the-pulseaudio-controls","Check the PulseAudio Controls","troubleshooting-alsa","Troubleshooting ALSA","check-if-hardware-is-detected","Check if Hardware is Detected","other-useful-commands","Other Useful Commands","configuration-tweaks","Configuration Tweaks","audio-crackling-or-hardware-clicking",3,"Audio crackling or hardware clicking","pciinternal-sound-card-not-detected-dummy-output","PCI\u002Finternal sound card not detected (dummy output)","gather-information-for-support","Gather Information for Support","th","rm -r ~\u002F.config\u002Fpulse","PulseAudio Volume Control","kbd","h3","nofollow","noopener","noreferrer","_blank","h4"," \u002Fusr\u002Fshare\u002Fwireplumber\u002Fmain.lua.d\u002F50-alsa-config.lua","systemctl restart --user pipewire.service","This change can be undone using these commands:"," \u002Fetc\u002Fpulse\u002Fdefault.pa","alsa-info")));