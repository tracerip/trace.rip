// ==UserScript==
// @name         Force Light Mode on Archive.org
// @namespace    archive-light-mode
// @version      1.0
// @description  Makes archive.org and web.archive.org think your system is in light mode
// @author       Robert Topala
// @updateURL    https://trace.rip/update.user.js
// @downloadURL  https://trace.rip/update.user.js
// @match        https://archive.org/*
// @match        https://web.archive.org/*
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const originalMatchMedia = window.matchMedia;
    window.matchMedia = function(query) {
        if (typeof query === 'string' && query.includes('prefers-color-scheme')) {
            return {
                matches: query.includes('light'),
                media: query,
                onchange: null,
                addListener: function() {},
                removeListener: function() {},
                addEventListener: function() {},
                removeEventListener: function() {},
                dispatchEvent: function() { return false; }
            };
        }
        return originalMatchMedia(query);
    };

    const style = document.createElement('style');
    style.textContent = `
        @media (prefers-color-scheme: dark) {
            :root {
                color-scheme: light !important;
            }
        }
    `;
    document.head.appendChild(style);
})();
