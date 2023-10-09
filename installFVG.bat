@echo off
echo installing stuff...
haxelib install lime 8.0.1
haxelib install openfl 9.2.1
haxelib install flixel 5.2.2
haxelib install flixel-tools 1.5.1
haxelib install flixel-ui 2.5.0
haxelib install hscript 2.5.0
haxelib install flixel-addons 3.0.2
haxelib install SScript 4.0.1
haxelib install tjson 1.4.0
haxelib install actuate
haxelib git hxCodec https://github.com/polybiusproxy/hxCodec.git
haxelib run lime setup
haxelib run lime setup flixel
haxelib run flixel-tools setup
haxelib git linc_luajit https://github.com/superpowers04/linc_luajit.git
haxelib git hxvm-luajit https://github.com/nebulazorua/hxvm-luajit
haxelib git faxe https://github.com/uhrobots/faxe
haxelib git polymod https://github.com/MasterEric/polymod.git
haxelib git discord_rpc https://github.com/Aidan63/linc_discord-rpc
haxelib git extension-webm https://github.com/KadeDev/extension-webm
lime rebuild extension-webm windows
lime build windows