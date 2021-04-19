import 'dotenv/config';

import mailQueue from './lib/Queue';
import Mail from './lib/Mail';

mailQueue.process(async function ({ data }, done) {
    await Mail.sendMail({
        from: 'henri@henri.com.br',
        to: `${data.name} <${data.email}>`,
        subject: data.title,
        text: data.message
    });

    done();
});
