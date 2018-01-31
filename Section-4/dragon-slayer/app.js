new Vue({ 
    el: '#app',
    data: { 
        newGame: true,
        playerLifePoints: 20, 
        dragonLifePoints: 20,
        gameLog: []
    }, 
    methods: { 
        startNewGame: function(){
            this.newGame = !this.newGame;
            this.playerLifePoints = 100; 
            this.dragonLifePoints = 100;
            this.gameLog = [];
        },
        playerAttack: function() { 

            var randomPlayerDamage = this.randomDamage(10, 5); 
            var randomDragonDamage = this.randomDamage(10, 5); 

            this.dragonLifePoints -= randomPlayerDamage;

            this.gameLog.unshift( { playerTurn: true, text: 'PLAYER HITS MONSTER FOR ' + randomPlayerDamage } ); 

            this.playerLifePoints -= randomDragonDamage;
            this.gameLog.unshift( { playerTurn: false, text: 'MONSTER HITS PLAYER FOR ' + randomDragonDamage} ); 

        },
        playerSpecialAttack: function() { 

            var randomPlayerDamage = this.randomDamage(15, 8); 
            var randomDragonDamage = this.randomDamage(15, 8); 

            this.dragonLifePoints -= randomPlayerDamage;

            this.gameLog.unshift( { playerTurn: true, text: 'PLAYER HITS MONSTER FOR ' + randomPlayerDamage } ); 

            this.playerLifePoints -= randomDragonDamage;
            this.gameLog.unshift( { playerTurn: false, text: 'MONSTER HITS PLAYER FOR ' + randomDragonDamage} ); 
            
        },
        playerHeal: function() { 

            if( this.playerLifePoints >= 100)
                alert('You cannnot heal yourself, you Have 100% of your life')
            else {
                var randomPlayerHeal = this.randomDamage(10, 5); 
                var randomDragonDamage = this.randomDamage(randomPlayerHeal, 2); 
    
                this.playerLifePoints += randomPlayerHeal;
                this.gameLog.unshift( { playerTurn: true, text: 'PLAYER HEALS HIMSELF FOR ' + randomPlayerHeal } ); 

                
                this.playerLifePoints -= randomDragonDamage;
                this.gameLog.unshift( { playerTurn: false, text: 'MONSTER HITS PLAYER FOR ' + randomDragonDamage} ); 
                
            }     
        },
        randomDamage: function(max , min){
             return Math.floor(Math.random() * (max - min + 1)) + min;
        }
    },
    computed: {
        PlayerHBStatusStyle: function(){ 
            return { 
                width: this.playerLifePoints + '%'
            }
        },
        DragonHBStatusStyle: function(){ 
            return { 
                width: this.dragonLifePoints + '%'
            }
        }
    }, 
    watch: { 
        dragonLifePoints: function(value){ 
            if (value <= 0)
                if(confirm('YOU WIN, Do you want to play again ?'))
                    this.startNewGame();
                else
                    this.newGame = !this.newGame;
        },
        playerLifePoints: function(value){
            if( value >= 100 )
                this.playerLifePoints = 100;
            
            if (value <= 0)
                if(confirm('YOU LOST, Do you want to play again ?'))
                    this.startNewGame();
                else
                    this.newGame = !this.newGame;
        }
    }
});