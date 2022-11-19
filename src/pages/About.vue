<template>
  <div>
    <Navbar />

    <section class="skills">
      <h1 class="heading"><span>my</span> skills</h1>

      <div class="box-container">
        <div class="box">
          <img src="images/icon-1.png" />
          <h3>html</h3>
        </div>
        <div class="box">
          <img src="images/icon-2.png" />
          <h3>css</h3>
        </div>
        <div class="box">
          <img src="images/icon-3.png" />
          <h3>javascript</h3>
        </div>
        <div class="box">
          <img src="images/icon-4.png" />
          <h3>sass</h3>
        </div>
        <div class="box">
          <img src="images/icon-5.png" />
          <h3>angular</h3>
        </div>
        <div class="box">
          <img src="images/icon-6.png" />
          <h3>react.js</h3>
        </div>
      </div>
    </section>

    <!-- skills section ends -->

    <!-- education section starts  -->

    <section class="education">
      <h1 class="heading"><span>my</span> experience</h1>

      <div class="box-container">
        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2016 - 2017</span>
          <h3>INTER EXPRESS LOGISTICS PRIVATE LIMITED</h3>
          <p>
            Assist the system analyst in conduct analysis, architecture, design
            database model for the new application.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2017 - 2018</span>
          <h3>PTT Digital Solutions Company Limited</h3>
          <p>
            Front-end coding to develop web applications follows by mock-up
            screen design. And back-end coding and test to configuration
            workflows and business processes.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2018 - 2018</span>
          <h3>Thai Beverage PLC</h3>
          <p>
            Develop new features to facilitate related procedures and tools if
            necessary, Troubleshoot, test, and maintain the core product
            software and databases to ensure strong optimization and
            functionality.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2019 - 2020</span>
          <h3>Cigna</h3>
          <p>
            Assist the system analyst in conduct analysis, architecture, design
            database model for the new application.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2019 - 2020</span>
          <h3>EMETWORKS</h3>
          <p>
            Develop new features to facilitate related procedures and tools if
            necessary.
          </p>
        </div>

        <div class="box">
          <i class="fas fa-briefcase"></i>
          <span>2020 - 2021</span>
          <h3>uTech Solutions</h3>
          <p>
            Assist the system analyst in conduct analysis, architecture, design
            database model for the new application.
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
export default {
  components: { Navbar }
}
</script>

<style></style>
