<script setup>
import FooterColumnLogo from './footerComponents/FooterColumnLogo.vue';
import FooterColumnAboutUs from './footerComponents/FooterColumnAboutUs.vue';
import FooterColumnSocial from './footerComponents/FooterColumnSocial.vue';

</script>

<template>
  <footer class="footer p-4">
    <div class="container-xl d-grid gap-4">
        <div class="row d-flex justify-content-between w-100 text-center">
            <!--Grid column-->
            <FooterColumnLogo />
            <!--Grid column-->
      
            <!--Grid column-->
            <!-- <div class="col-lg-3 col-md-6 mb-4 mb-md-0">
              <h5 class="text-uppercase mb-0">Links</h5>
      
              <ul class="list-unstyled">
                <li>
                  <a href="#!" class="text-dark">Link 1</a>
                </li>
                <li>
                  <a href="#!" class="text-dark">Link 2</a>
                </li>
                <li>
                  <a href="#!" class="text-dark">Link 3</a>
                </li>
                <li>
                  <a href="#!" class="text-dark">Link 4</a>
                </li>
              </ul>
            </div> -->
            <!--Grid column-->
      
            <!--Grid column-->
            <FooterColumnAboutUs />
            <!--Grid column-->
      
            <!--Grid column-->
            <FooterColumnSocial />
            <!--Grid column-->
          </div>

    </div>
  </footer>
</template>

<style lang="scss">
@import '../../assets/scss/styles.scss';


footer {
    width: 100%;
    min-height: 230px;

    background-color: $indigo;
    bottom: 0;

}

</style>