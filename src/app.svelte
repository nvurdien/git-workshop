<script lang="ts">
  import { Router, Route } from "svelte-routing";
  import { Home, Blog } from "./lib/routes";

  export let url = "";
</script>

<svelte:head>
  <!-- UIkit CSS -->
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.15.8/dist/css/uikit.min.css" />
  
  <!-- UIkit JS -->
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.8/dist/js/uikit.min.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/uikit@3.15.8/dist/js/uikit-icons.min.js"></script>
</svelte:head>

<Router url="{url}">
  <div>
   <Route path="/"><Home /></Route>
   <Route path="post/:id" component="{Blog}" />
  </div>
</Router>