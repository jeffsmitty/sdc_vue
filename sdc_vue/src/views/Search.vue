<template>
    <div id = "searchPageContainer" class="container">
        <h2>Search SDC</h2>
    <reactive-base app="good-books-yj" credentials="gBgUqs2tV:3456f3bf-ea9e-4ebc-9c93-08eb13e5c87c" >
      <div class="filters-container">
        <multi-list
          componentId="Authors"
          dataField="authors.raw"
          class="filter"
          title="Select Authors"
          selectAllLabel="All Authors"
        />
                <single-range
          componentId="Ratings"
          dataField="average_rating"
          :data="[
            { 'start': 0, 'end': 3, 'label': 'Rating < 3' },
            { 'start': 3, 'end': 4, 'label': 'Rating 3 to 4' },
            { 'start': 4, 'end': 5, 'label': 'Rating > 4' }
          ]"
          title="Book Ratings"
          class="filter"
        />
    </div>

    

    </reactive-base>
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    <br />
    </div>
</template>



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

