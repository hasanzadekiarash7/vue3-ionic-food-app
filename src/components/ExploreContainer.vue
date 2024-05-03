<template>
  <ion-content>
    <ion-list lines="none" class="full-width">
      <ion-list-header
        style="display: flex; flex-flow: column nowrap; justify-content: flex-start; align-items: flex-start;">
        <ion-label style="font-size: 1rem; color: #D6D3D1;">current place</ion-label>
        <ion-text style="font-size: 1.5rem; margin: 10px 0;">los angles, usa</ion-text>
      </ion-list-header>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%;margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%; margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%; margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%; margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%; margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
      <ion-item style="margin: 20px 0; box-shadow: 1px 2px 8px 1px rgba(0, 0, 0, 0.1); padding: 20px;" lines="none"
        mode="ios">
        <ion-avatar>
          <img src="/public/favicon.png" />
        </ion-avatar>
        <div style="width: 80%; margin-left: 20px;">
          <ion-label style="font-size: 1.2rem; font-weight: 600;">current place</ion-label>
          <ion-text style="font-size: 1rem; margin: 15px 0; color: #D6D3D1;">4$</ion-text>
        </div>
        <ion-button expand="block">
          add
        </ion-button>
      </ion-item>
    </ion-list>
  </ion-content>
  <ion-button expand="block" style="width: 100%;" shape="round">
    add your food
  </ion-button>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import ExploreContainer from '@/components/ExploreContainer.vue';
import { paperPlane, paperPlaneSharp } from 'ionicons/icons';
</script>

<style lang="scss" scoped></style>