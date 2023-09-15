import { Injectable } from '@nestjs/common';
import { merge } from 'lodash';
import santizeHtml from 'sanitize-html';

@Injectable()
export class SanitizeService {
    protected config: santizeHtml.IOptions = {};

    constructor() {
        this.config = {
            allowedTags: santizeHtml.defaults.allowedTags.concat(['img', 'code']),
            allowedAttributes: {
                ...santizeHtml.defaults.allowedAttributes,
                '*': ['class', 'style', 'height', 'width'],
            },
            parser: {
                lowerCaseTags: true,
            },
        };
    }

    sanitize(body: string, options?: santizeHtml.IOptions) {
        return santizeHtml(
            body,
            merge(this.config, options ?? {}, {
                arrayMerge: (_d: any, s: any, _o: any) => s,
            }),
        );
    }
}
