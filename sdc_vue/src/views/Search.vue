<template>
  <div id="searchPageContainer" class="container">
    <h2>Search SDC</h2>
    <reactive-base
      app="sdc_items"
      credentials="6m5d8utyq0:oa9qjxi1lu"
      url="https://sdc-testing-396737610.us-east-1.bonsaisearch.net"
    >
      <div class="row">
        <div class="filters-container col-md-5">
          <multi-list
            componentId="Keyword"
            dataField="metadata.resourceInfo.keyword.keyword.keyword.keyword"
            title="Keywords"
            :URLParams="true"
            :react="{
              and: ['Keyword', 'Author']
            }"
          />
          <br />
          <br />
          <multi-list
            componentId="Author"
            dataField="contact.name.keyword"
            title="Authors"
            :URLParams="true"
            :react="{
              and: ['Keyword', 'Author']
            }"
          />
        </div>

        <div class="results-container col-md-5">
          Text Search
          <data-search
            componentId="Text Search"
            :dataField="[
                  'metadata.resourceInfo.citation.title',
                  'metadata.resourceInfo.abstract'
                ]"
            :autosuggest="true"
            :showFilter="true"
            :URLParams="true"
            placeholder="Search for text in title or abstract"
          />
          <br />
          <br />
          <reactive-list
            componentId="SearchResult"
            dataField="metadata.resourceInfo.citation.title.keyword"
            paginationAt="both"
            :react="{
              and: ['Keyword', 'Text Search', 'Author']
            }"
          >
          <div slot="renderItem" slot-scope="{ res }">
            {{res.metadata.resourceInfo.citation.title}}
          </div>
          </reactive-list>

        </div>
      </div>
    </reactive-base>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
  </div>
</template>

<style scoped></style>

<script>
export default {
  name: "app",
  data: function() {
    return {
      showBooks: window.innerWidth <= 768 ? true : false
    };
  },
  methods: {
    switchContainer: function() {
      return (this.showBooks = !this.showBooks);
    }
  }
};
</script>
