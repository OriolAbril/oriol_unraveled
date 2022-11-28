data {
  int<lower=0> N;
  vector[N] y;
}

parameters {
  real mu;
  real<lower=0> sigma;
}

model {
    y ~ lognormal(mu, sigma);
}

generated quantities {
    vector[N] log_lik;
    vector[N] y_hat;

    for (i in 1:N) {
        log_lik[i] = lognormal_lpdf(y[i] | mu, sigma);
        y_hat[i] = lognormal_rng(mu, sigma);
    }
}
