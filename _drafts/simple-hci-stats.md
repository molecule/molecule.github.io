### Simple HCI stats

1. Look at your data.
2. Check for the assumptions
    - Normality
    - Homoscedasticity
    - Independence (not really a test, good experiment design).
3. Shapiro-Wilk tests for normality. You have to run it on the residuals. Here's an example running on preference.

```
# Shapiro-Wilk normality test on response
shapiro.test(overall[overall$condition == "off",]$preference)
shapiro.test(overall[overall$condition == "auto",]$preference)
shapiro.test(overall[overall$condition == "manual",]$preference)
# A statistically significant result here indicates a departure from normality.
# But a lot of the tests are fairly robust to non-normal data
# also influenced by how many data points you have.

# but really what matters most is the residuals
m = aov(preference ~ condition, data=overall) # fit model
shapiro.test(residuals(m)) # test residuals
# p value from this test is statistically significant so we need to run
# the nonparametric version of this test.
# the line in this plot indicates what would be conforming to a normal distribution
# so depending on how much your data deviates there, you can see how normal your data is.
qqnorm(residuals(m)); qqline(residuals(m)) # plot residuals

```

4. Since we have a departure from normality, we need to use nonparametric tests.
4. We have Between-subjects, 3 levels (3 modes), 1 factor (participant ID) (I think).
5. So that means Friedman test.


### Questions
1. Paired vs non-paired
2. Chi-squared vs Friedman for Ranking?
3. Wilcox vs Wilcoxon Signed Rank? Parametric vs nonparametric? When to use these?
4. How can an analysis of varience test show statistical significance but the post-hoc doesn't? (Indication something is wrong?) 
