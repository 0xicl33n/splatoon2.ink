<template>
    <div class="columns is-mobile result">
        <div class="column">
            <div class="winner-mark-shadow" v-if="winner == 'alpha'"></div>
            <div class="winner-mark" :style="{ background: festival.colors.alpha.css_rgb }" v-if="winner == 'alpha'"></div>
            <div class="font-splatoon2 title is-4" :title="alphaTitle | numberFormat">
                <div>{{ results.rates[type].alpha | wholePercent }}<span class="percent">.{{ results.rates[type].alpha | partialPercent }}{{ $t('splatfest.results.%') }}</span></div>
            </div>
        </div>

        <div class="column is-3 has-text-centered font-splatoon2">
            {{ $t(`splatfest.results.${type}`) }}
        </div>

        <div class="column">
            <div class="winner-mark-shadow" v-if="winner == 'bravo'"></div>
            <div class="winner-mark" :style="{ background: festival.colors.bravo.css_rgb }" v-if="winner == 'bravo'"></div>
            <div class="font-splatoon2 title is-4" :title="bravoTitle | numberFormat">
                <div>{{ results.rates[type].bravo | wholePercent }}<span class="percent">.{{ results.rates[type].bravo | partialPercent }}{{ $t('splatfest.results.%') }}</span></div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: ['festival', 'results', 'type'],
    computed: {
        winner() {
            return this.results.summary[this.type] ? 'bravo' : 'alpha';
        },
        alphaTitle() {
            return this.resultTitle('alpha');
        },
        bravoTitle() {
            return this.resultTitle('bravo');
        },
    },
    filters: {
        wholePercent(value) {
            return value.toString().slice(0, -2);
        },
        partialPercent(value) {
            return value.toString().slice(-2);
        },
    },
    methods: {
        resultTitle(team) {
            if (this.type == 'vote')
                return this.results.team_participants && this.results.team_participants[team];
            return this.results.team_scores && this.results.team_scores[`${team}_${this.type}`];
        },
    },
}
</script>
