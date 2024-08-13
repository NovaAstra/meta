import { customAlphabet } from 'nanoid'

const alphabet = '23456789ABCDEFGHJKLMNPQRSTWXYZabcdefghijkmnopqrstuvwxyz';

export const guid = (size: number = 12): (size?: number) => string => customAlphabet(alphabet, size)