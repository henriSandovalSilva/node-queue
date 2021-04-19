import MailQueue from '../lib/Queue';

export default {
    async store(request, response) {
        const { name, email, title, message } = request.body;

        try {
            await MailQueue.add({
                name,
                email,
                title,
                message
            });

            response.status(200).send();
        } catch (e) {
            response.status(500).send();
        }
    }
}
