import connection from '@/services/axios';

export default {
    install: (app) => {
        app.config.globalProperties.$api = {
            async get(path) {
                const { data } = await connection.get(path);
                return data;
            },
        };
    },
};
