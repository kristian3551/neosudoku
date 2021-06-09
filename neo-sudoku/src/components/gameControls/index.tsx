import React from 'react';
import styles from './styles.module.css';

const GameControls: React.FunctionComponent = () => {
    return (<div className={styles["game-controls"]}>
        <div className={styles["options-menu"]}>
            <button type="button">Return</button>
            <button>Delete</button>
            <button>Hint</button>
        </div>
        <div className={styles["digits"]}>
            <button>1</button>
            <button>
                2
        </button>
            <button>
                3
        </button>
            <button>
                4
        </button>
            <button>
                5
        </button>
            <button>
                6
        </button>
            <button>
                7
        </button>
            <button>
                8
        </button>
            <button>
                9
        </button>
        </div>
        <button>Finish</button>
    </div>)
}

export default GameControls;