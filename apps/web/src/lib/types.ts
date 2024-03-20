import type {IconDefinition} from '@fortawesome/fontawesome-svg-core';
import type { RecordModel } from 'pocketbase';

export const themes = ['dark', 'light'] as const;
export type Theme = (typeof themes)[number];

export type NavLink = {
    target: {
        href: string;
        newTab?: boolean;
    };
    content: {
        text?: string;
        icon?: IconDefinition;
    };
};

export type Document = {
    id: string,
    collectionId: string,
    created: Date,
    updated: Date,
    title: string,
    content: string,
    thumbnail: string,
    images: string[],
}




// This arcane magic thing is very neat
export type PBRecord<T, E = unknown> = RecordModel &
  T &
  (E extends Record<string, unknown>
    ? {
        expand: { [Key in keyof E]: E[Key] } & RecordModel;
      }
    : unknown);

export type Entry  = {
  title:string
  content:string
  thumbnail:string
}
export type Image = {
  image:string
}

// images is relation
// It's good to be typesafe, + it doesn't take that much time to type this 



// I'm going to paste a helper type i made for pb
