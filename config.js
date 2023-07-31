const CONFIG = {
    commandPathDelimiter: '/',
    commandSearchDelimiter: ' ',
    defaultSearchTemplate: 'https://google.com/search?q={}',
    openLinksInNewTab: false,
    suggestionLimit: 4,
};

const COMMANDS = new Map([
    // column 1
    [
        'yt',
        {
            name: 'youtube',
            searchTemplate: '/results?search_query={}',
            url: 'https://youtube.com/feed/subscriptions',
        },
    ],
    [
        'ym',
        {
            name: 'youtube music',
            searchTemplate: '/search?q={}',
            url: 'https://music.youtube.com/',
        },
    ],
    [
        's',
        {
            name: 'spotify',
            url: 'https://open.spotify.com',
        },
    ],
    [
        't',
        {
            name: 'twitch',
            searchTemplate: '/{}',
            url: 'https://twitch.tv',
            suggestions: [
                'dagametrain',
                'pesticon',
                'aurismat',
                'kintailfox',
            ],
        },
    ],
    [
        'd',
        {
            name: 'Discord',
            url: 'https://discord.com/channels/@me',
        },
    ],
    [
        'twt',
        {
            name: 'twitter',
            url: 'https://twitter.com/home',
        },
    ],
    [
        'fm',
        {
            name: 'fb messenger',
            url: 'https://facebook.com/messages',
        },
    ],
    [
        'fb',
        {
            name: 'facebook',
            url: 'https://facebook.com',
        },
    ],
    // column 2
    [
        'git',
        {
            name: 'github',
            url: 'https://github.com/aurismat',
        },
    ],
    [
        'lab',
        {
            name: 'gitlab',
            url: 'https://gitlab.com/aurismat',
        },
    ],
    [
        'cht',
        {
            name: 'cht.sh',
            searchTemplate: '/{}',
            url: 'https://cht.sh',
            suggestions: [
                'tmux',
                'ssh',
                'docker',
                'ip',
            ],
        },
    ],
    [
        'c',
        {
            name: 'carbon',
            url: 'https://carbon.now.sh',
        },
    ],
    [
        'lua',
        {
            name: 'luacheck',
            url: 'https://gitspartv.github.io/lua-patterns/?pattern=\\',
        },
    ],
    [
        'gdb',
        {
            name: 'online gdb',
            url: 'https://onlinegdb.com/',
        },
    ],
    [
        'rgx',
        {
            name: 'regex101',
            url: 'https://regex101.com/',
        },
    ],
    [
        'uc',
        {
            name: 'unknowncheats',
            url: 'https://www.unknowncheats.me/forum/index.php',
        },
    ],
    // column 3
    [
        'm',
        {
            name: 'gmail',
            searchTemplate: '/mail/u/{}',
            url: 'https://mail.google.com/mail/u/0',
            suggestions: [
                '0',
                '1',
                '2',
                '3',
            ],
        },
    ],
    [
        'k',
        {
            name: 'keep',
            url: 'https://keep.google.com',
        },
    ],
    [
        'gpt',
        {
            name: 'chatgpt',
            url: 'https://chat.openai.com/',
        },
    ],
    [
        'sdb',
        {
            name: 'steamdb',
            url: 'https://steamdb.info/',
        },
    ],
    [
        'scp',
        {
            name: 'scope.gg',
            url: 'https://scope.gg/',
        },
    ],
    [
        'osrs',
        {
            name: 'osrs wiki',
            url: 'https://oldschool.runescape.wiki/',
        },
    ],
    [
        'arch',
        {
            name: 'arch wiki',
            url: 'https://wiki.archlinux.org/',
        },
    ],
    [
        'fxt',
        {
            name: 'fextralife',
            url: 'https://www.wiki.fextralife.com/',
        },
    ],
]);