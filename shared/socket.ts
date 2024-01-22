export type SocketEvent =
    | 'disconnect'
    | 'account:created'
    | 'account:logged-in'
    | 'account:logged-out'
    | 'account:password-reset-success'
    | 'account:picture-updated'
    | 'account:removed'
    | 'account:role-added'
    | 'account:role-removed'
    | 'account:unverified'
    | 'account:update-email'
    | 'account:update-first-name'
    | 'account:update-last-name'
    | 'account:update-phone-number'
    | 'account:update-picture'
    | 'account:update-username'
    | 'account:username-changed'
    | 'account:verified'
    | 'member:accepted'
    | 'member:add-skill'
    | 'member:rejected'
    | 'member:remove-skill'
    | 'member:request'
    | 'member:revoked'
    | 'member:status-updated'
    | 'member:update-bio'
    | 'member:update-resume'
    | 'member:update-title'
    | 'page:open'
    | 'roles:added'
    | 'roles:removed'
    | 'skills:added'
    | 'skills:removed'
    | 'test:success'
    | 'test:test';
