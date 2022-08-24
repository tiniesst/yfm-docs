/* eslint-disable @typescript-eslint/no-explicit-any */
import {EOL, BLOCK} from '../constants';

import {TitleDepth} from '../types';

function list(items: string[]) {
    return items.map((item) => `- ${item}`).join(EOL) + EOL;
}

function link(text: string, src: string) {
    return `[${text}](${src})`;
}

function title(depth: TitleDepth) {
    return (content?: string) => content?.length && '#'.repeat(depth) + ` ${content}`;
}

function body(text?: string) {
    return text?.length && text;
}

function mono(text: string) {
    return `##${text}##`;
}

function code(text: string) {
    return EOL + ['```', text, '```'].join(EOL) + EOL;
}

function table(data: any[][]) {
    const colgen = (col: any) => (Array.isArray(col) ? `${EOL}${table(col)}${EOL}` : ` ${col} `);
    const rowgen = (row: any) => `||${row.map(colgen).join('|')}||`;

    return `#|${block(data.map(rowgen))}|#`;
}

function cut(text: string, heading = '') {
    return block([`{% cut "${heading}" %}`, text, '{% endcut %}']) + EOL;
}

function block(elements: any[]) {
    return elements.filter(Boolean).join(BLOCK);
}

export {list, link, title, body, mono, table, code, cut, block};

export default {list, link, title, body, mono, table, code, cut, block};
