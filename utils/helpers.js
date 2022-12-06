export function removeEmpty(obj) {
    return Object.fromEntries(Object.entries(obj).filter(([_, v]) => !!v));
  }

  export const isEmptyObject = (obj) => !!Object.entries(obj).length