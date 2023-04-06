<template>
  <div id="yhteydenotto" class="footer frame">
    <div class="footer__container">
      <div class="restaurant">
        <div class="restaurant__container">
          <h3>{{data.restaurant}} {{data.name}}</h3>
          <ul>
            <li>
              <h5>{{data.formlabel01}}</h5>
              <a
                href="mailto:hello@paulettehelsinki.com?subject=Yhteydenotto ravintola Paulette"
                >{{ data.email }}</a
              >
            </li>
            <li>
              <h5>{{data.formlabel02}}</h5>
              <a :href="`tel:${data.phone}`"
                ><span itemprop="telephone">{{ data.phone }}</span></a
              >
            </li>
            <li>
              <h5>{{data.formlabel03}}</h5>
              <a
                href="https://goo.gl/maps/XsaFYWghQsTogcVV9"
                target="_blank"
                rel="noopener noreferrer"
                >{{ data.address }}</a
              >
            </li>
            <li>
              <h5>{{data.formlabel04}}</h5>
              <ul>
                <li>
                  <a
                    href="https://www.instagram.com/paulettehelsinki/"
                    target="_blank"
                    >Instagram</a
                  >
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/paulettehelsinki"
                    target="_blank"
                    >Facebook</a
                  >
                </li>
              </ul>
            </li>
          </ul>
        </div>
        <div class="contact">
          <div class="contact__container">
            <h3>{{data.contactlable}}</h3>
            <form
              class="contact__container__form"
              name="contact"
              data-netlify="true"
            >
              <input
                type="text"
                name="subject"
                value="Uusi yhdeydenoton Paulette sivuston kautta."
                class="hidden"
              />
              <div class="contact__container__form__item">
                <label for="name"> {{data.formlabel05}} </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Matti Meikäläinen"
                />
              </div>

              <div class="contact__container__form__item">
                <label for="email"> {{data.formlabel06}} </label>
                <input
                  id="email"
                  name="email"
                  type="text"
                  placeholder="osoite@sahkoposti.com"
                />
              </div>

              <div class="contact__container__form__item">
                <label for="type"> {{data.formlabel07}}</label>
                <div class="relative">
                  <select id="grid-state" name="type[]">
                    <option v-for="(item, index) in data.formlabel10" :key="index">{{item.name}}</option>
                  </select>
                  <div
                    class="
                      pointer-events-none
                      absolute
                      inset-y-0
                      right-0
                      flex
                      items-center
                      px-2
                      text-gray-700
                    "
                  >
                    <svg
                      class="fill-current h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 20 20"
                    >
                      <path
                        d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"
                      />
                    </svg>
                  </div>
                </div>
              </div>

              <div class="contact__container__form__item">
                <label for="message"> {{data.formlabel08}} </label>
                <textarea
                  id="message"
                  name="message"
                  rows="10"
                  cols="5"
                ></textarea>
              </div>
              <div class="contact__container__form__item">
                <button class="button" type="submit">{{data.formlabel09}}</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="siteinfo">
        <div class="text-white">
          © 2021 Paulette - Sivun toteutus <a href="https://www.andreaskoutsoukos.dev/" target="_blank">Andreas Koutsoukos (Koodi.info)</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Object,
  },
  setup() {
    return {};
  }
};
</script>

<style lang="postcss" scoped>
h3 {
  @apply font-serif text-3xl font-bold mb-4;
  color: var(--color01);
}
h5 {
  @apply font-serif-secondary text-lg  mb-2;
  color: var(--color01);
}

ul {
  li {
    @apply my-8;
    a {
      @apply font-sans text-base text-white leading-loose;
    }
  }
}

.footer {
  @apply py-16 px-6 mt-24 relative;
  background-color: var(--color09);
  &__container {
    @apply container mx-auto max-w-6xl px-2;
    @media (min-width: theme("screens.sm")) {
      display: grid;
      grid-template-columns: auto auto auto auto;
      grid-template-rows: auto auto;
      gap: 0px 0px;
      grid-auto-flow: row;
      grid-template-areas:
        "footerarea footerarea footerarea footerarea"
        "siteinfo siteinfo siteinfo siteinfo";
    }
  }
}

.restaurant {
  @media (min-width: theme("screens.sm")) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-template-rows: 1fr 1fr 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-template-areas:
      "restaurant restaurant contact contact"
      "restaurant restaurant contact contact"
      "restaurant restaurant contact contact";
    grid-area: footerarea;
  }
  &__container {
    grid-area: restaurant;
  }
}

.contact {
  @apply container mx-auto max-w-6xl;
  @media (min-width: theme("screens.sm")) {
    display: grid;
    grid-auto-columns: 1fr;
    gap: 0px 0px;
    grid-auto-flow: row;
    grid-area: contact;
  }
  &__container {
    &__form {
      @apply w-full max-w-lg flex flex-wrap mb-6;
      &__item {
        @apply w-full py-3;
        label {
          @apply block tracking-wide font-serif-secondary text-lg mb-2;
          color: var(--color01);
        }
        input {
          @apply appearance-none block w-full border rounded border-white py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white;
          &.error {
            @apply bg-gray-200 text-gray-700 border border-brand-primary focus:outline-none focus:bg-white;
          }
        }
        select {
          @apply block appearance-none w-full border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500;
        }
        p {
          @apply text-red-500 text-xs italic;
        }
        textarea {
          @apply block w-full border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white;
          border-color: var(--color03);
        }
        button {
          background-color: var(--color10);
          color: var(--color08);
        }
      }
    }
  }
}

.siteinfo {
  grid-area: siteinfo;
  a{
    @apply underline;
  }
}
</style>
