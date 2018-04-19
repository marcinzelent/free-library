import { Info } from './info'
import { Book } from './book'
import { Media } from './media'
import { FragmentData } from './fragment-data'

export interface BookDetails {
    xml : string;
    fb2 : string;
    genres : Array<Info>;
    mobi : string;
    kinds : Array<Info>;
    parent : Book;
    title : string;
    url : string;
    media : Array<Media>;
    cover : string;
    simple_cover : string;
    epochs : Array<Info>;
    fragment_data : FragmentData;
    html : string;
    authors : Array<Info>;
    txt : string;
    pdf : string;
    simple_thumb: string;
    children : Array<Book>;
    epub : string;
    cover_thumb : string;
}