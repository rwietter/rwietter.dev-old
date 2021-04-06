import algoliasearch from 'algoliasearch/lite';
import React from 'react';
import { Hits, InstantSearch, SearchBox, Stats } from 'react-instantsearch-dom';

import HitPost from './HitPosts';
import { SearchWrapper } from './styles';

const SearchPosts = () => {
  
	const searchClient = algoliasearch(
    process.env.GATSBY_ALGOLIA_APP_ID,
    process.env.GATSBY_ALGOLIA_SEARCH_KEY
	)
	
	const indexName = process.env.GATSBY_ALGOLIA_INDEX_NAME

	return (
    <SearchWrapper>
      <InstantSearch searchClient={searchClient} indexName={indexName}>
        <SearchBox translations={{ placeHolder: "Pesquisar..." }} />
				<Stats translations={{
					stats(nbHits, timeSpentMs) {
					return `${nbHits} resultados encontrados em ${timeSpentMs}ms`
				} }} />
        <Hits hitComponent={HitPost} />
      </InstantSearch>
    </SearchWrapper>
  )
}

export { SearchPosts }
