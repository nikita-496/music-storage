export  interface ITextAreas {
  [key: string]: string[]
}

export interface IContent {
  title: string;
  text: string[];
  picture: any;
}

export interface ITrack {
_id: string,
picture: string,
audio: string,
listens: number,
artist: string,
name: string,
}