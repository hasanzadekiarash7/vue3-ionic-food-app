<template>
    <ion-page>
        <ion-content class="ion-padding">
            <div class="payment">
                <ion-label class="payment-label">payment mode</ion-label>
                <ion-card>
                    <ion-card-header>
                        <img class="payment-cardImage" src="../Assets/images/Visa-Logo-2006.png" alt="">
                    </ion-card-header>
                    <ion-card-content class="payment-card">
                        <div class="payment-card-box">
                            <ion-text>card number</ion-text>
                            <ion-input type="tel" v-model="tel1" fill="outline" :maxlength="16"></ion-input>
                        </div>
                        <div class="payment-card-secondBox">
                            <div>
                                <ion-text>expiry date</ion-text>
                                <ion-input type="tel" v-model="tel2" fill="outline" class="payment-card-secondBox-input"
                                    :maxlength="4"></ion-input>
                            </div>
                            <div>
                                <ion-text>cvv</ion-text>
                                <ion-input type="tel" v-model="tel3" fill="outline" class="payment-card-secondBox-input"
                                    :maxlength="3"></ion-input>
                            </div>
                        </div>
                    </ion-card-content>
                </ion-card>
                <ion-text class="text-center">or checkout with</ion-text>
                <ion-button class="full-width" expand="block" color="light" shape="round">
                    <ion-icon :icon="logoPaypal" />
                    with paypal
                </ion-button>
                <ion-button class="full-width mb-5 mt-4" expand="block" color="light" shape="round">
                    <ion-icon :icon="logoApple" />
                    with apple
                </ion-button>
                <ion-button :disabled="isDisabled" class="full-width" href="/tabs/tab2" expand="block" color="primary"
                    shape="round">
                    Click me
                </ion-button>
            </div>
        </ion-content>
    </ion-page>
</template>

<script setup lang="ts">
import { IonPage, IonText, IonItem, IonHeader, IonToolbar, IonTitle, IonContent, IonLabel, IonList, IonListHeader, IonFabList, IonLoading, IonButton, IonAvatar, IonIcon, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonInput } from '@ionic/vue';
import { paperPlane, logoPaypal, logoApple } from 'ionicons/icons';
import { ref, watch } from 'vue';
const tel1 = ref()
const tel2 = ref()
const tel3 = ref()
const isDisabled = ref(true)
watch(() => tel1.value && tel2.value && tel3.value, () => {
    if (tel1.value != "" && tel2.value != "" && tel3.value != "") {
        isDisabled.value = false
    } else {
        isDisabled.value = true
    }
})
</script>

<style lang="scss" scoped>
@import url('../Assets/interface/payment.scss');
</style>