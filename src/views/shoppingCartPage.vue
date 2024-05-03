<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="mb-5" style="height: 330px; overflow: hidden; overflow-y: scroll;">
                <shopping-carts />
            </div>
            <div>
                <check-total />
            </div>
            <ion-button expand="block" style="width: 100%;" shape="round">
                check out
            </ion-button>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import CheckTotal from '@/components/shoppingCart/checkTotal.vue';
import ShoppingCarts from '@/components/shoppingCart/shoppingCarts.vue';
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon } from '@ionic/vue';
import { paperPlane, paperPlaneSharp } from 'ionicons/icons';
import { version } from "../../package.json";
</script>

<style lang="scss" scoped></style>