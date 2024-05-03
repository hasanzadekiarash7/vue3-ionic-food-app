<template>
    <ion-card v-for="item in 3" class="mb-5" style="border: 1px solid #f5f5f4;">
        <ion-card-content class="shopping-cart">
            <img class="shopping-cart-image" src="../../Assets/images/Food.jpg" alt="">
            <div class="shopping-cart-content">
                <ion-text class="shopping-cart-content-title">pasta with special soda</ion-text>
                <ion-text class="shopping-cart-content-price">$20.00</ion-text>
            </div>
            <div class="shopping-cart-counts">
                <ion-icon class="shopping-cart-counts-icon" :class="cardCount === 10 ? 'color-gray' : ''" @click="plus"
                    :icon="add"></ion-icon>
                <ion-text class="shopping-cart-counts-number">{{ cardCount }}</ion-text>
                <ion-icon class="shopping-cart-counts-icon" @click="minus" :class="cardCount === 0 ? 'color-gray' : ''"
                    :icon="remove"></ion-icon>
            </div>
        </ion-card-content>
    </ion-card>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/vue';
import { paperPlane, add, remove } from 'ionicons/icons';
import { ref, version } from 'vue';
const cardCount = ref(0)
function plus() {
    if (cardCount.value !== 10) {
        cardCount.value += 1
    }
}
function minus() {
    if (cardCount.value !== 0) {
        cardCount.value -= 1
    }
}
</script>

<style lang="scss" scoped>
@import url('../../Assets/interface/shoppingCarts.scss');
</style>