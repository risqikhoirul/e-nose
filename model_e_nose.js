function score(input) {
    var var0;
    if (input[0] <= 194.5) {
        if (input[1] <= 2561.0) {
            if (input[2] <= 30.299999237060547) {
                var0 = [1.0, 0.0];
            } else {
                var0 = [0.0, 1.0];
            }
        } else {
            var0 = [1.0, 0.0];
        }
    } else {
        if (input[2] <= 33.75) {
            if (input[2] <= 32.14999961853027) {
                var0 = [1.0, 0.0];
            } else {
                if (input[0] <= 208.5) {
                    if (input[0] <= 198.0) {
                        var0 = [0.0, 1.0];
                    } else {
                        if (input[0] <= 201.5) {
                            if (input[2] <= 33.10000038146973) {
                                var0 = [0.0, 1.0];
                            } else {
                                var0 = [1.0, 0.0];
                            }
                        } else {
                            if (input[1] <= 2683.5) {
                                var0 = [0.0, 1.0];
                            } else {
                                var0 = [1.0, 0.0];
                            }
                        }
                    }
                } else {
                    var0 = [0.0, 1.0];
                }
            }
        } else {
            var0 = [1.0, 0.0];
        }
    }
    return var0;
}
