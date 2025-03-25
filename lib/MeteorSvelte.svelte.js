import { Meteor } from 'meteor/meteor';
import { Tracker } from 'meteor/tracker';
import { onDestroy } from 'svelte';
import { readable } from 'svelte/store';


export function useTracker(handle) {
    return readable(handle(), (set) => {
        const computation = Tracker.autorun(() => {
            set(handle());
        });
        
        onDestroy(() => computation.stop());
    });
}

export function useSubscribe(publication, ...params) {
    return useTracker(() => {
        const handle = Meteor.subscribe(publication, ...params);
        const ready = handle.ready();
        console.debug({ publication, handle, ready });
        return ready;
    });
}