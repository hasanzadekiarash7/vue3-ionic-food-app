<template>
  <ion-page>
    <ion-tabs>
      <ion-router-outlet></ion-router-outlet>
      <ion-tab-bar mode="md" slot="bottom">
        <ion-tab-button tab="tab1" href="/tabs/tab2">
          <ion-icon aria-hidden="true" :icon="person" />
        </ion-tab-button>

        <ion-tab-button tab="tab2" href="/tabs/tab3">
          <ion-icon class="hello" aria-hidden="true" :icon="chatboxEllipses" />
        </ion-tab-button>

        <ion-tab-button tab="tab3" href="/tabs/tab1">
          <ion-icon aria-hidden="true" :icon="home" />
        </ion-tab-button>
        <ion-tab-button tab="tab4" href="/tabs/tab4">
          <ion-icon aria-hidden="true" :icon="notifications" />
        </ion-tab-button>
        <ion-tab-button tab="tab5" href="/tabs/tab5">
          <ion-icon aria-hidden="true" :icon="menu" />
        </ion-tab-button>
        <ion-tab-button tab="tab6" href="/tabs/tab6">
          <ion-icon aria-hidden="true" :icon="cart" />
        </ion-tab-button>
      </ion-tab-bar>
    </ion-tabs>
  </ion-page>
</template>

<script setup lang="ts">
import { IonTabBar, IonTabButton, IonTabs, IonLabel, IonIcon, IonPage, IonRouterOutlet } from '@ionic/vue';
import { location, home, notifications, menu, person, cart, chatboxEllipses } from 'ionicons/icons';
</script>

<style lang="scss" scoped>
.md {
  --background: #f1f1f1;
}
</style>