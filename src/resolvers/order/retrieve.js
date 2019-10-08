import { createResolver } from '@globality/nodule-graphql';
import { bind, getContainer } from '@globality/nodule-config';

async function aggregate({ customerId }, req) {
    const { charmander } = getContainer('services');

    if (!orderId) {
        return {};
    }

    return charmander.order.retrieve(req, {
        customerId,
    });
}

const resolver = createResolver({
    aggregate,
    mask: (obj, args, context, req) => [ars, req],
});

bind('graphql.resolvers.order.retrieve', () => resolver);