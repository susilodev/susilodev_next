import TOCInline from 'pliny/ui/TOCInline'
import Pre from 'pliny/ui/Pre'
import BlogNewsletterForm from 'pliny/ui/BlogNewsletterForm'
import type { MDXComponents } from 'mdx/types'
import Image from './Image'
import CustomLink from './Link'
import TableWrapper from './TableWrapper'
import DynamicChart from './mdx/DynamicChart'
import Mermaid from './mdx/Mermaid'
import ButtonExplore from './mdx/ButtonExplore'

export const components: MDXComponents = {
  Image,
  Mermaid,
  ButtonExplore,
  TOCInline,
  DynamicChart,
  a: CustomLink,
  pre: Pre,
  table: TableWrapper,
  BlogNewsletterForm,
}
